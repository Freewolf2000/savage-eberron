const ID = "sweb-core-rules";
const SHEET_NAME = 'Savage Eberron Sheet';

Hooks.on("init", () => {

  class SWEBSheet extends game.swade.sheets.CharacterSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['sweb-sheet', 'swade-official', 'sheet', 'actor'],
        width: 705,
        height: 800,
        resizable: true,
      });
    }
  }

  Actors.registerSheet("sweb-core-rules", SWEBSheet, {
    types: ["character"],
    makeDefault: false,
    label: SHEET_NAME
  });

});


Hooks.on("ready", async () => {
  //Force Building Pack Indexes so Entity Links don't break
  for(let pack of game.packs.contents){
    if(pack.collection.includes(ID))
    pack.getIndex();
  }

  //Add sidebar clipping mask to page
  $(document.body).append(await renderTemplate(`modules/${ID}/assets/layout/sidebar-mask.html`));

  console.debug("Savage Eberron Core | Initalizing....")
})

Hooks.on("ready", onReady);
function onReady() {
	class SWEBJournalSheet extends JournalSheet {
		static get defaultOptions() {
			return foundry.utils.mergeObject(super.defaultOptions, {
				classes: ["sheet", "journal-sheet", "journal-entry", "sweb-wrapper"]
			});
		}

		get template() {
			return `modules/${ID}/templates/journal.hbs`;
		}

		async getData(...args) {
			const data = await super.getData(...args);
			//console.log(data);

			data.toc.forEach(page => {
				if (page?.flags[ID]?.pageNumber) page.number = page.flags[ID].pageNumber;
				if (page?.flags[ID]?.pageNumberClass) page.pageNumberClass = page.flags[ID].pageNumberClass;

				page.editable = page.editable && page?.flags[ID]?.editable;
			});

			return data;
		}

		activateListeners(html) {
			super.activateListeners(html);

			html.on("click", "a.content-link", TextEditor._onClickContentLink);

			return html;
		}

		async _renderHeadings(pageNode, toc) {
			Object.entries(toc || {}).forEach(([n, heading]) => {
				if (heading.element.classList.contains("no-toc")) delete toc[n];
				const spans = heading.element?.querySelectorAll("span");
				if (spans.length > 0) heading.text = spans[0].textContent;
			});

			return await super._renderHeadings(pageNode, toc);
		}
	}

	class SWEBJournalSheetPage extends JournalTextPageSheet {
		// static get defaultOptions() {
		// 	return foundry.utils.mergeObject(super.defaultOptions, {
		// 		classes: ["sheet", "journal-sheet", "journal-entry-page", "text", "sweb-journal-page", "swpf", "sweb-dialog"]
		// 	});
		// }

		get template() {
			return `modules/${ID}/templates/page-${this.isEditable ? "edit" : "view"}.hbs`;
		}

		async getData(...args) {
			const data = await super.getData(...args);

			const flags = this.object.flags[ID];

			if (flags.pageNumber) data.data.number = flags.pageNumber;
			if (flags.subtitle) data.data.subtitle = flags.subtitle;

			//console.log(data);
			return data;
		}
	}

	class SWEBCompendiumTOC extends game.swade.apps.CompendiumTOC {
		static get defaultOptions() {
			return foundry.utils.mergeObject(super.defaultOptions, {
				classes: ['swade-app', 'compendium-toc', 'sweb-compendium'],
				width: 850,
			});
		}
	}

	class SWEBJournalSheetImagePage extends JournalImagePageSheet {}

	Journal.registerSheet(ID, SWEBJournalSheet, {
		type: "base",
		makeDefault: false,
		label: `${SHEET_NAME}`,
	});

	DocumentSheetConfig.registerSheet(JournalEntryPage, ID, SWEBJournalSheetPage, {
		type: "text",
		makeDefault: false,
		label: `${SHEET_NAME}`,
	});

	DocumentSheetConfig.registerSheet(JournalEntryPage, ID, SWEBJournalSheetImagePage, {
		type: "image",
		makeDefault: false,
		label: `${SHEET_NAME}`,
	});

	for (const pack of game.packs) {
		const isRightType = ['Actor', 'Item', 'JournalEntry'].includes(
			pack.metadata.type,
		);
		const isBlocked = game.settings.get('swade', 'tocBlockList')[
			pack.collection
		];
		const isSWEB = [
			  ID
			].includes(pack.metadata.packageName);

		if (isRightType && !isBlocked && isSWEB) {
			pack.apps = [new SWEBCompendiumTOC(pack)];
		}
	}
}
