# Website moodlebox.net

This repository contains the content pages of the [MoodleBox][moodlebox] website, [moodlebox.net][moodlebox].

## Contributing

You're welcome to enhance the text, fix typos, etc. and to add other translations. Pages are written in [Markdown format][markdown].

As for everything else in the project, the contributions to MoodleBox project are governed by our [Code of Conduct](https://github.com/martignoni/moodlebox.net/blob/master/CODE_OF_CONDUCT.md).

## How to contribute a new language translation

__Note:__ _It's important that the versions of the web site in different languages are in synchronisation (i.e. have the same structure and reflect the same meaning). Your translation must be __equivalent to the original content of the English pages__ (same structure, same meaning). If you would like to add content to a page (or change its meaning) or add new help pages, please [contact me][contact] beforehand!_

1. Fork this repository by clicking "Fork" in the top right corner of this page.
1. Clone your fork to your computer: `git clone https://github.com/<your-username>/moodlebox.net`.
1. Duplicate the english page you want to translate (ending with `.en.md`) and rename the extension with your language [ISO code](https://www.w3schools.com/tags/ref_language_codes.asp),e.g. `.de.md` for German, `.ja.md` for Japanese, `.zh.md` for Chinese, `.ru.md` for russian, etc.
1. Translate the page and commit your changes: `git add *; git commit -a`.
1. Push your changes to Github: `git push`.
1. Create a pull request by visiting `https://github.com/<you-username>/moodlebox.net` and following the instructions at the top of the screen.

### What about the file name?

The main part of the file name (before the first dot) must __not be changed__, as it is used to keep the page in relation with its translations, via the language switcher of the web site.

The last part of the file name, the extension `.md`, must also __not be changed__.

The only part that must be changed is the `.en` in between. This part has to match your language [ISO code](https://www.w3schools.com/tags/ref_language_codes.asp), e.g. `.de` for German, `.ja` for Japanese, `.zh` for Chinese, `.ru` for russian, etc.

### What to do with the header of the file?

Every page comes with a header, not directly displayed in the website, but very important to get correctly. These are some rules to get it right.

- __title__: The title of the page. It is displayed in the main heading of the page, and serves as the title of internal links. Words of the title have too more weight in the internal search engine.

- __author__: The author(s) of the page. When you edit an already existing page, please add your name after the existing name(s), with a comma, for example:
  ```yml
  author: Jane Doe, Nicolas Martignoni
  ```
  Note: The author name is __not__ displayed anywhere on the website.

- __type__: Should __not be changed__. Has to remain exactly identical to the english version of the translated version.

- __date__: The date of the creation of a new page, in YYYY-MM-DD format, e.g.
  ```yml
  date: 2018-01-23
  ```
  Do not change it if you edit an existing page, as this is intended as a date marker of the first creation of the page.

- __slug__: Sets the permalink of the page. It should obviously be something related with the title and the content of the page. The slug should __only contain lower-case characters and hyphens__. No special characters, no punctuation. For a french translated page, the following slug
  ```yml
  slug: une-page-inutile
  ```
  will give the permalink `https://moodlebox.net/fr/help/une-page-inutile`.

- __categories__: Should __not be changed__. Has to remain exactly identical to the english version of the translated version.

## How to fix typos or enhance an existing translation?

We want the MoodleBox documentation to be the best it can be. We've open-sourced the doc and we welcome any pull requests if you find it lacking. The easier way is to [open an issue][issues] describing the fix to implement.  Otherwise, you may use the following procedure.

1. Fork this repository by clicking "Fork" in the top right corner of this page.
1. Clone your fork to your computer: `git clone https://github.com/<your-username>/moodlebox.net`.
1. Fix the typos and/or reword the text.
1. Commit your changes: `git commit -a`
1. Push your changes to Github: `git push`.
1. Create a pull request by visiting `https://github.com/<you-username>/moodlebox.net` and following the instructions at the top of the screen.

[moodlebox]: https://moodlebox.net
[issues]: https://github.com/martignoni/make-moodlebox/issues
[contact]: mailto:nicolas@martignoni.net
[markdown]: https://daringfireball.net/projects/markdown/
