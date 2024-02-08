---
title: Style Guide
path_override: style-guide
position: 2
layout: documentation
meta:
  title: Documentation Style Guide | HubRise
  description: Anyone can contribute to the HubRise online documentation. The style guide provides editorial guidelines for anyone contributing to it.
---

This guide establishes standard requirements to improve the readability and overall user experience of the HubRise online documentation.

## General Information

Where the HubRise style guide does not deal with a specific situation, the [Google developer documentation style guide](https://developers.google.com/style) can be used for reference.

The [Merriam-Webster dictionary](https://www.merriam-webster.com) should be used as a spelling reference when we have multiple ways of spelling the same word. In addition the [Cambridge Dictionary](https://dictionary.cambridge.org) can be used as a secondary reference only where necessary.

Terminology and spelling decisions are informed in our XTM tool, only for internal use.

Keep in mind that readers of the documentation might not be native English speakers.

## Language

The HubRise documentation should be written in British English. Localisation into French is done regularly to keep all bilingual content in sync.

If the user interface is not available in English, include the user interface term in the native language followed by the translation in brackets.

> Right: Click on **Activer** (Connect) when prompted to do so.

### Tone

Be conversational rather than formal but do not overdo it. Be friendly, and respectful while sharing your know-how.

### Gender neutrality

Don't use gender-specific pronouns unless the person you're referring to is actually that gender.

In particular, don't use **he**, **him**, **his**, **she**, or **her** as gender-neutral pronouns, and don't use **he/she** or **(s)he** or other such punctuational approaches.

## Capitalisation {#capitalisation}

If it is an official title or name, something that can be or is trademarked or copyrighted, or the name of something that is unique in the universe, capitalise it. Otherwise, do not.

If you are unsure on whether to capitalise something or not, do not capitalise it because nine out of 10 times, you will be doing the right thing.

One exception is when referring to a specific item in HubRise. For example, if we are referring to the Restaurant or the Retail store object in HubRise, we capitalise it to show that we are referring to the HubRise item, as opposed to a generic restaurant or retail store.

Also, if it is an expression that has a well known acronym amongst your target audience, you should capitalise the word.

Words such as a, an, and, but, for, nor, of, or, so, the, to, and yet must not be capitalised.

> Wrong: If You Are Unsure On Whether To Capitalise Something Or Not, Do Not Capitalise It

> Right: If You Are Unsure on Whether to Capitalise Something or Not, Do Not Capitalise It

You may use [Capitalize My Title](https://capitalizemytitle.com) to help you capitalise your headings. Choose the “APA” style.

## Punctuation

### Colon

The text that precedes the colon must stand alone as a complete sentence.
The first letter following a colon should always be capitalised.

> Wrong: Defined locations as: the Account name followed by the city.

> Right: Defined locations as follows: The Account name followed by the city.

### Commas {#commas}

If you have a list of three or more items, add a comma before the last item. For instance: I'd like to order a focaccia, a margherita, and a tiramisu. In this list of three items, the comma after the second item is the Oxford or serial comma.

### Hyphenation

If you are in doubt whether to hyphenate a set of words or not, first look up the word in the [Merriam-Webster dictionary](https://www.merriam-webster.com) and follow the rules established there. For instance, the Merriam-Webster spells **well known** with a hyphen: **well-known**.

A second rule of thumb is that, if the set of words does not play the same role in a sentence without hyphenation, you should use the version adequate to the role you wish it to play in the sentence. For example, the [Merriam-Webster dictionary](https://www.merriam-webster.com) states that **kick off** is a verb and **kickoff** is a noun. **What time does the game kick off?** uses the verb, whereas **Kickoff will be at 11 o'clock prompt** uses the noun.

For sets of two words only, if the dictionary indicates that there is an alternative without a hyphen, then use that alternative instead of the hyphenated version.

### Parentheses

The use of parentheses is discouraged. Limit their use to clarify acronyms. If you have something to say, a sentence works just as well. Readers tend to ignore anything in parentheses.

### Quotation Marks

Punctuation goes inside quotation marks. Only use quotation marks for actual quotes and dialogues.

## Lists

A short list of items can be represented in a sentence. For more than three items or for multiple long instructions, display them as a bullet list. Every item of a list should end with a full stop, except for single words or sentences without a verb.

For example, a short list of items can be written as follows: Type indicates how the order will be received. Types include **DELIVERY**, **COLLECTION** or **EAT-IN**.

A longer list can be written as follows:

Statuses include:

- New
- Accepted
- In Delivery
- Rejected
- Complete

or:

From the main page, you can perform the following actions:

- Remove an order.
- Place an order.
- Modify the order details.
- Remove all orders.

Avoid using lists to repeat all fields to fill in shown in the UI. For context, include a screenshot instead and refer to fields you need to provide information on.

## Links

### External Links

To create a link to an external website, use the following format:

`[Visit Google](https://www.google.com/)`

External links start with `https://` or `http://`. They open in a new tab.

### Internal Links

To create a link to another page in the documentation, use the following format:

`[Deliveroo](/apps/deliveroo/overview)`

Internal links start with `/` and include the file path, relative to the `content` directory. The language folder (`en` or `fr`) is omitted.

### Anchors

Anchors are used to direct readers to a specific section within a page. To create an anchor, use the following format in the section heading:

`## Integration Features {#features}`

With this anchor set up, you can link to the section using the following link:

`[Deliveroo Integration Features](/apps/deliveroo/overview#features)`

## Readability

First and foremost, your text must be easy to read. Keep in mind that readers are busy, so they may read your text diagonally. You must have strategies in place to ensure that either your message passes on, or they find the help they need. You must also be concise and objective. Keep your text short and simple.

To achieve an easily readable text, you must use:

- Short Sentences.
- Short paragraphs.
- Bulleted lists.
- Tables.
- Diagrams.

We will now look in more detail to the aspects that contribute to the readability of your text.

### Active voice

Avoid using the passive voice as it makes your writing more distant and your message less clear. Use active voice instead.

Passive voice is when the grammatical subject of the sentence is the person or thing being acted upon. Active voice in the other hand is when the grammatical subject of the sentence is the person or thing that performs the action.

Almost every passive sentence has an active counterpart. If you cannot find an active alternative, use the passive form. Using it for less than 10% of your sentences is not that harmful.

Here are some examples of sentences in the active and passive voices:

| Passive Voice                                      | Active Voice                               |
| :------------------------------------------------- | :----------------------------------------- |
| A plant is cultivated by the gardener.             | The gardener cultivates a plant.           |
| A plant is being cultivated by the gardener.       | The gardener is cultivating a plant.       |
| A plant will be cultivated by the gardener.        | The gardener will cultivate a plant.       |
| A plant will have been cultivated by the gardener. | The gardener will have cultivated a plant. |

### Politeness

Everyone wants to be polite, but for instructions it can be left out.

> Wrong: Please click **Save**.

> Right: Click **Save**.

### Clause order

Include conditional clauses before instructions, not after to give readers a chance to skip it if the circumstance does not apply.

> Wrong: See **[link to other document]** for more information

> Right: For more information, see **[link to other document]**.

### Synonyms

Avoid using synonyms. If you cannot escape it, use three at most. Your text is not literary, and a lot of synonyms may sound repetitive to the reader, increasing the odds of low engagement levels.

### User Actions

Users may use different actions for the same event. On a Desktop computer, they might click a link, while on a mobile device they might tap it. When possible, use universal terms across platforms. For example: Select instead of click or tap.

### Second person and first person

The use of **you** (second person) instead of **we** is preferred. Identify who the **you** is (the developer, the user?) and to be consistent throughout to avoid confusion. In an instruction, if you can, leave out the **you**.

> Wrong: You can click on Connect

> Right: Click Connect

### Prepositions vs Verbs

Log in to or log into is a common issue, made worse with login.

**Into** is a preposition. It establishes a position in time or space. For example: I enter into a car.

**In to** is a two part verb. I log in to a web page. I am not literally crawling through my monitor screen. You may log a web page, or log in to a web page.

### Numbers

A simple rule for using numbers that small numbers under ten should generally be spelled out. Larger numbers above ten are written as numerals.

### Ampersand

Unless it is part of a name, such as the name of a company, do not use the ampersand (**&**) as an abbreviation strategy.

## Adjectives

Adjectives shall be used with thrift. Keep in mind that the tone is neither commercial nor literary and adjectives that contribute to that kind of tone shall be avoided. An example of such an adjective is “easy”.

## Bold

Bold is also used for UI references. For example: Select **CONNECTIONS** from the HubRise menu. For more information on UI menu representation, see ...

When you need to **emphasise** a important word, expression, or sentence, you can also use bold without over doing it.

Bold is used for important notices and cross-references to frequently asked questions. For more information on notices representation, see [Notices](#notices).

For example:

---

**IMPORTANT NOTE:** Verify your application supports sending emails before using this feature.

---

## Contractions

Do not use contractions. For instance, write **do not** instead of **don't**.

## Italics

You may use italics for tech terms except code. Do not use it to identify examples, make a sentence instead.

## Notices {#notices}

Notices give important or useful information that is not necessarily part of the flow of the text. Notices can inlude Important Notes and Frequently Asked Questions.

**Important Notes** should be indicated between two lines, with the Important Note in bold and a description following, for example:

---

**IMPORTANT NOTE:** Your note follows here.

---

If you foresee an issue that may form part of the Frequently Asked Questions, this question may be inserted between two lines with Related FAQ in bold and the questions following. The question must be linked to the relevant question in the Frequently Asked Questions, for example:

---

**Related FAQ**: [How Do I Create a User Profile for Another Person?](/docs/faqs/create-a-user-profile-for-another-person)

---

## User Interface

The following styles are used to specify how User Interfaces are described.

### Menus {#menus}

Menus are described in the order they are selected. They are presented in bold with a greater than sign separating each step. If a user is to select File, then Save, this would be displayed as: **File** > **Save**

This should be done for the complete menu path to the command each time. For example, in HubRise we have an **ACCOUNT** that also includes a subsection for **Accounts**. To make clear what we are referring to, we would include the complete menu path each time, with the same capitalisation as the UI:

- **SETTINGS** > **ACCOUNT** ← Refers to the **ACCOUNT** page in **SETTINGS**.
- **SETTINGS** > **ACCOUNT** > **Account** ← Refers to the **Account** section in the **ACCOUNT** page.

### Commands and Buttons

UI reference should be in bold and have the same capitalisation as the UI, except for final punctuation. For example, a UI label of **User details**: will be documented as **User details**. No colon, quote marks or any other type of punctuation are required.

For example:

- Click **COMPLETED** ← This refers to the button. Since it is in all caps in the UI, it is all caps in the documentation.

![Screenshot of Click Completed](./images/002-click-completed-screenshot.png)

- **Confirmed Time** ← This refers to the text.

![Screenshot of Time Completed](./images/003-completed-time-screenshot.png)

### Optional steps

When a step is optional, add _Optional:_ as the first word of the step.

> Incorrect: (Optional) Click **Log in**.

> Correct: Optional: Click **Log in**.

### Screenshots

A full guide on screenshots can be found in the [Screenshots Guide](/contributing/screenshots-guide).

## Technical Terms

Terms from your code, keyboard shortcuts, file names, button names, and other tech terms that need to stand out from your text must be handled the following way:

- Use italics for tech terms, except code. Do not use quotation marks for any tech terms.
- If tech terms are in italics, you cannot use italics for emphasis as well. So, if you need to emphasise a tech term, use bold.
- File types are in all capital letters. For example: Logs are in JSON format.
- File names use code font. For Example: `001-en-click-completed.png`
- UI elements that are rendered based on previously entered text input use code font.
- Attribute names and values use code font.
- Write code terms in Courier New and enclose them with a grey box, like this:

`// This is a comment in your code.`

All code must be in its own paragraph.
If you want to include a small portion of code in the middle of a sentence, write it in _Courier New_, but do not enclose it with a grey box.

## Headings and Titles

Section headings should be marked with the appropriate heading style. In the hierarchical organisation of the text, a structure with three levels should be preferred. `<h1>` is used for the page title. `<h2>` and `<h3>` can be used for the content. `<h4>` to be used only when strictly necessary. Levels from `<h5>` and above should be avoided.

`<h2>` tags should use HubRise terminology in order to maximise consistency between the documentation of one solution and another. This eliminates confusion when a reader has to refer to the documentation of multiple solutions.

`<h3>` tags and descriptive text will always use the terminology of the respective solution.

## File name

Files should be given a contextual name written in lower case. Separate words with hyphens, not underscores. Use only standard ASCII alphanumeric characters.
For image, video or diagram file names, see [Image file names](/contributing/screenshots-guide#naming-convention).

## Meta Title and Description

A meta title and meta description should be added to every file.

### Meta Title

Meta titles are composed by concatenating the page title, the section name, and the word "HubRise", separated by `|`.

If the resulting title contains more than 60 characters, try shrinking the first part, by summarizing the page title.

Meta titles should be capitalised following HubRise's title rules written in _Title Case_ with no full stop at the end. For more information on capitalisation rules, see [Capitalisation](#capitalisation).

> Right: Overview | Lightspeed K Series | HubRise

### Meta Description

The meta description should use _Sentence Case_ with a full stop at the end.

The meta description should include 155 to 160 characters. Google will truncate it if you make it longer.
The content should be relevant and unique from other pages. It should be easy to read and offer a compelling description using important keywords.

> Right: meta description structure to use for each of the documentation pages
>
> - **Overview**: Lightspeed K Series overview, reasons for connecting it to HubRise and summary of integrated features. Synchronise data between your EPOS and your apps.
> - **Connect to HubRise**: Instructions on connecting Lightspeed K Series with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
> - **Map Ref Codes**: Instructions on mapping Lightspeed K Series product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
> - **Troubleshooting**: Troubleshooting Lightspeed K Series connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
> - **Terminology**: Correspondence table showing terms used by Lightspeed K Series and those used on HubRise for the same concept. Connect apps and synchronise your data.
> - **FAQs**: FAQs on connecting Lightspeed K Series with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.

To complete a meta description and maximise the number of characters, it is possible to add a small sentence at the end:

- Connect apps and synchronise your data.
- Synchronise your data.
- Connect apps.
