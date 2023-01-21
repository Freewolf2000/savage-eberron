# SWPF Styling Guide

## Elements
The majority of styles are applied directly to particular elements, and won't require additional classses to be applied. The following elements should be used to get the right styles:

- `<p>` - The paragraph tag should be used to wrap any text that isn't a heading, table cell, or other specially marked text.

- `<h1>` - This is the largest heading, and it has two variations. The wide h1 heading has dark text, and curly icons to the left and right. The narrow version on the other hand, is light text, in a box with a red decorative background. To specify which version, you will need to use a class:

	```html
	<h1 class="wide">A Wide heading</h1>
	<h1 class="narrow">Fancy red box on me</h1>
	```

- `<h2>` - This is the second level of heading, normally it has red text, an underline, and is centered. You can use the `no-underline` class to remove the underline in cases where it is not used. The `h2.no-underline` is the heading used in the names of statblocks.

- `<h3>` - The third level of heading, red, left aligned, and smaller than the other headings.

- `<ul>` & `<li>` - The unordered list is used in conjuntion with the `<li>` list item to create a list, these will be styled with square bullets of the appropriate color.

- `<table>` - The table is used for all tabular data, tables contain `<tr>` table rown elements, which contain `<td>` cells or `<th>` header cells. Some tables include a ton of data, such as weapon tables, and don't fit will into the Journal window because of how wide they need to be. You can add the class `wide` to a table: `<table class="wide"> </table>` in this case, which will make the text a little smaller and the table itself a little wider to help fit all that data.
  - `<tr>` - Each row of cells is contained in one of these, each row alternates in color. Sometimes, you may need the table to start with a row of a differening color, you can add an empty `<tr></tr>` in these places to "skip" a color. Furthermore, sometimes a row with have a "note" in it assocaited with the row above, place an empty row between them so they appear in the same color, and look like a single cell. If you have a row that contains one of these notes that are indented, use the `table-note` class on the `<tr>`.
  - `<td>` - Most cells in a table are data cells, and they are represented by `<td>` tags. These tags should not contain `<p>` tags unless the data is in the form of a paragrah, for data that is just a word or two, or a number, do not add a `p`. In many cases, especially for number values, the text in the cell should be centered. In this case, add the class `centered` to the cell: `<td class="centered"> </td>`.
  - `<th>` - The table heading is a special cell that represents a heading in the table. A simple `th` just contains text, but the text will be bold. You may also use `left`, `centered`, or `right` to adjust the text alignment on these. 
  
- `<blockquote>` & `<cite>` - This represents a quotation, these use a special font, and are larger and cold. Each `<blockquote>` should contain a `<cite>` which contains in the name of the speaker. The actual text of the quote should also be wrapped in a `<p>` tag, and the quotation marks of the quote, and the dash "-" on the name should not be included:

	```html
	<blockquote>
		<p>Please use spaces even though everyone knows tabs are better.</p>
		<cite>Dev (probably)</cite>
	</blockquote>
	```

- `<aside>` - Used to represent a sidebar or special call-out box, for sidebars use the `sidebar` class. There is also a `handwriting` class used for the note about "Smith & Robards Ammunition". This element is used to wrap the sidebar content and give it a special background. The `<aside>` can contain an `<h1>` which has special formatting in this location.

	```html
	<aside class="sidebar">
		<h1>Sidebar Title</h1>
		<p>Sidebar text</p>
	</aside>
	```

- `<div>` - The most genric of elements, used to wrap things together, or provide additional structure where needed.

- `<img>` - Images require some aesthetic choices, in some cases you may want an image to fill the entire width of the journal, for these you don't need to add any classes. However, many images take up too much space, or might look better if they allowed text to flow around them. In these cases, use the `float-right` or the `float-left` class to make the image smaller, push it to the right or left, and allow text to flow around. Additionally, some images, usually of people, have a lot of empty space and it's nice if the text flows into that empty space around the shape of the image. To achieve this, you need to add a bit of extra markup to the image:

	```html
	<img class="float-right"
		src="modules/swpf-core-rules/assets/art/person.webp" 
		alt="A person standing there"
		style="shape-outside: url('modules/swpf-core-rules/assets/art/person.webp');">
	```
This applies the CSS `shape-outside` property, using the image alpha as the shape. Notice that the `url` contains the *same* image path as the image `src` attribute. Also notice the single quote `'` marks here.

## Classes

- `swpf-core` - This class should be applied to a `<div>` which wraps everything in each journal entry.

- `hanging-indent` - A class that can be applied to a `<p>` element to give it a reverse/hanging indent, this is used in statblocks.

- `red-label` - Apply this class to a `<span>` element to get the red all-caps text used as labels, such as "Requirements"

- `poi` - Add this class to a span `<span class="poi">` at the start of a paragraph to create blue rectangle for area/point of interest designations. Can also be added inside of an `<h1 class="area">` to creata a red poi label.

- `area` - Add to an `<h2>` for a red area/poi heading. Include a `<span class="poi">` for the text like "A3" that goes in the red box.

- `drop-caps` - Add this class to a `<p>` element to get a big red drop-caps letter at the beginning.

- `left`, `center`, & `right` - These classes change the aligment of text. Useful in tables, and anywhere else where you need text aligned in a way that it doesn't do be default. Can be applied to `th`, `td`, `p`, h tags, and pretty much anything else. **Note**: *Most text, such as `<td>`s, are `left` by default, only inclue this class where required.*

- `no-display` - Use this class in conjunction with the above to make an element invisible on the sceen, but that assistive technology will still read.

- `wide` - This class can be used on an `h1` to produce the wider dark text heading with swirly icons, or it can be used on a `table` to make the table fit a large number of columns better (tables like weapons will need this).

- `narrow` - Used on an `h1` for the narrower, ornate red background heading.

- `no-underline` - Used on the `h2` where there shouldn't be an underline.

- `example` - For `<h2>` Creates a special blue "example" heading such as the one on page 208 (206), and for `<p>` creates a colored box with italic text. Optionally use the `red` class for red text.

- `qualities` - Used on an `<h2>` element to produce a special red background and blue bborders. Used in the enchantments section.

- `subsection` - For `<h3>`s with red italic text and an underline.

- `treasure` - For an `<h3>` heading used to designate treasure info sections.

- `item` - For `<h3>`s with a tan background (typically used on item names)

- `list-heading` - This class is used on a `span` in a few location in lists where the text begins with special bold text (not to be confused with `western` which is also a different color, or with `<strong>` which makes the text bold but doesn't change the font and other display properties).

- `dark` - Used on some `<th>` tags that have a dark background and light colored text.

- `sidebar` - Used on the `<aside>` element to indicate that it's a sidebar.

- `handwriting` - Used on an `<aside>` 

- `chapter-heading` - Put this clsss on a `<div>` as part of a big chapter heading. This `div` must contain an `<h1>` with the name of the chapter, followed by a `<figure>` with two spans each with their own special class, representing the text "chapter" and the chapter number. This produces the fancy chapter heading box with special background, and the chapter number in the upper right corner.

	```html
	<div class="chapter-heading">
		<h1>Any Time, Any Place</h1>
		<figure class="chapter-number">
			<span>Chapter One</span>
		</figure>
	</div>
	```

- `chapter-heading-paper` - A variation of the chapter heading, contains paragraph text. Optionally you can add the class `light` for a white paper rather than yellow.

	```html
	<div class="chapter-heading-paper">
		<h1>Background</h1>
		<p>Sandpoint has faced few trials and dangers...</p>
	</div>

- `yellow-banner` - Add to an `<h1>` for the yellow paper banner background.

- `smaller` & `smaller-2` - Put this class on the `<h1>` inside of a `chapter-heading` to make the text a little smaller for very long chapter names (ex: "Marshal's Setting Rules". And use `smaller-2` for even smaller text such 

- `float-left` & `float-right` - These classes can be put on elements like `aside`, `table`, `img`, `blockquote` and more. Elements with these classes will "float" to the left or right, and become narrower allowing regular text to flow around them on the other side. This allows for sidebars, pull quotes, and less intrusive images. Try to avoid putting one of these right before an `<h2>` that has an underline, the line will intersect the floating box in an ugly way. If nessesary just move the element below the `h2`, or further above it so they don't touch.

- `highlighted` - Used on tables for a highlighted (darker orange) row, used on the Class Edges table for each base class edge.

- `red` - A class to apply to any text that needs to be red.

- `rotrl` - Used on a `<strong>` tag at the start of a paragraph in the ROTRL adventure as an inline heading, usually used for points of interest.

- `read-aloud` - Used on a `<p>`, `<section>`, or `<div>` tag to style text in a special box intended to be read aloud to the players.

- `bullet` - Add this class to  a `<ul>` element to use simpler black bullets rather than red squares.

- `star-icon`, `dragon-icon` - Used to add a special icon to a piece of text, a list item, or a header.

- Table headings:
  - `<th class="main-heading">` - Red table headings
  - `<th class="sub-heading">`  - Black table headings
  - `<th class="bar-heading"><span> </span></th>` - Table headings with horizontal lines to the left and right. Must contain some element around the text, `<span>` is a good choice.

## Special Styles

### Class Edges

Each class should be wrapped in an `<article class="class-container">`, with the name of the class in an `<h1>` element. The `class-container` should contain everything from the `h1` of the class name through the advancement table. If there are additional details, such as domains, bloodlines, or schools, these are *not* contained within the `class-container`.

#### `h2.iconic-path`

The red background header for the iconic path section is an `<h2 class="iconic-path>`.
#### Statblocks

These "statblocks" are found under each class for the "iconic path." This appears as a three-cell block with rough black borders.

To create this style, start with a `<div class="statblock">`, then place three `<div>` elements inside of it. For the first two, add a `<span class="red-label"> </span>` with the "Attributes" and "Derived" text. Finally, add an unordered list `<ul>` to each div. 

Each attribute, derived stat, etc is a list item `<li>`. The red text in the third cell is a `<span class="red-label">`. 
##### Example
```html
<div class="statblock">
	<div>
		<span class="red-label">Attributes</span>
		<ul>
			<li>Agility d8</li>
			<li>Smarts d4</li>
			<li>Spirit d6</li>
			<li>Strength d10</li>
			<li>Vigor d8</li>
		</ul>
	</div>
	<div>
		<span class="red-label">Derived</span>
		<ul>
			<li>Parry: 6</li>
			<li>Toughness: 8 (2)</li>
			<li>Pace: 8</li>
			<li>Bennies: 3</li>
		</ul>
	</div>
	<div>
		<ul>
			<li><span class="red-label">Hindrances:</span> Bloodthirsty, Death Wish, Poverty</li>
			<li><span class="red-label">Edges:</span> Barbarian, Brute</li>
			<li><span class="red-label">Languages:</span> Common, Goblin, Halfling</li>
		</ul>
	</div>
</div>
```

#### Advancement Table

The advancement table should have the `advancement` class, and `<tr>`s for advanced edges have the `advanced` class. The heading that says "Advancement" is an `<h2>`.

##### Example

```html
<h2>Advancement</h2>
<table class="advencement">
	<tr>
		<td>
			<strong>1 –</strong> Trademark Weapon (Bastard Sword)
		</td>
	</tr>
	<tr>
		<td>
			<strong>2 –</strong> Sweep
		</td>
	</tr>
	<tr>
		<td>
			<strong>3 –</strong> Vigor d10
		</td>
	</tr>
	<tr class="advanced">
		<td>
			<strong>S –</strong> Powerful Blow
		</td>
	</tr>
</table>
```

#### Hazard Banners

The teal banners representing hazards on page 158 need special handling. These are represented by `h2` elements with the `trap` class. However they also require an addtional `style` attribute like this: `style="--trap-icon: url(../assets/layout/icon.svg);"`

The icon image appears to the left above the gold "coin" background.

##### Example

```html
<h2 class="trap" style="--trap-icon: url(../assets/layout/haunt-skull.svg);">Vengeful spirit</h2>
```

#### Award Banners

Similar to hazard banners in design, these banners are used for the red and white Award banners. They are represented by `h2` elements with the `red-award` class or `white-award` class.

##### Example

```html
<h2 class="red-award">Advancement Award</h2>
<h2 class="white-award">Story Award</h2>
```

### Encounters

To highlight encounters for the GM, there is a special style created specifically for encounters. This is created with a `<section class="encounter">` wrapped around the encounter text and heading. The heading itself is specially styled and includes some extra components.

The header is a `<header>` and contains three items:
- An `<img>` pointing to the token artwork for the actor used in this encounter. Use the smaller version of the art.
- An `<h2>` with the name of the encounter
- A `<span class="links">` to contain the Actor link(s) to the actor(s) for this encounter. Use the actor's *actual* name in the link text.

#### Example

```html
<section class="encounter">
	<header>
		<img src="/modules/swpf-core-rules/assets/art/tokens/SWPF-K.webp" alt="Koruvus">
		<h2>Prisoner Pits</h2>
		<span class="links">@Actor[aqyOSvTLXZDRkaxr]{Koruvus} @Actor[wnilkoOEpBmOQx79]{Human Zombie}</span>
	</header>
	<h3 class="treasure">Tactics</h3>
	<p>Koruvus takes his duty as guardian of this chamber seriously, and immediately attacks anyone who enters the room. He uses his breath weapon on the first round of combat, then moves in to engage the largest, most dangerous-looking foe with his weapons.</p>
	<p>He knows about the zombies under the floorboards, so he attempts to maneuver so the heroes risk falling into the pits. He attempts to push weaker-looking intruders to their doom in the pits if able.</p>
	<p>Koruvus fights to the death and pursues foes all the way to the Glassworks or the catacombs’ exit if necessary.</p>
</section>
```

## Editing Stylesheets 

*Never edit `swpf.css` directly. Only edit files ending in `.scss`*

In order to edit the stylesheets, you must install the necessary compiler tools. 

You need to have the `npm` package manager installed.

Run:
```bash
npm install
```

This will begin installing the dependencies for this project. That should include, among other things, the "Gulp" tool, and the "Sass" compiler. A new folder called `node_modules` will be created in your project, do not delete it.

Now you should be able to simply run:
```bash
gulp
```

This will start a script that compiles the Sass `.scss` files into one `swpf.css` file. The script should remain running, and automatically re-compile the stylesheets when you make changes.

When you have finished editing, and you have successfully compiled the stylesheet, make sure you **commit** all the `.scss` files *and* `swpf.css`.

#### Organization

The `swpf.scss` file is the "main" stylesheet file, files starting with `_` are "modules" in which Sass/CSS has been organized. The `_color.scss` is where color values should be defined as variables, avoid putting colors into any other file directly, prefer creating a new variable.