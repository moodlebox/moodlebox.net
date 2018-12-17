# Website moodlebox.net

[![Build Status](https://travis-ci.org/moodlebox/moodlebox.net.svg?branch=master)](https://travis-ci.org/moodlebox/moodlebox.net/)

This repository contains the content pages of the [MoodleBox][moodlebox] website, [moodlebox.net][moodlebox].

## Contributing

You're welcome to enhance the text, fix typos, etc. and to add other translations. Pages are written in [Markdown format][markdown].

As for everything else in the project, the contributions to MoodleBox project are governed by our [Code of Conduct](https://github.com/moodlebox/moodlebox.net/blob/master/CODE_OF_CONDUCT.md).

## How to contribute a new language translation

__Note:__ _It's important that the versions of the web site in different languages are in synchronisation (i.e. have the same structure and reflect the same meaning). Your translation must be __equivalent to the original content of the English pages__ (same structure, same meaning). If you would like to add content to a page (or change its meaning) or add new help pages, please [contact me][contact] beforehand!_

1. Fork this repository by clicking "Fork" in the top right corner of this page.
1. Clone your fork to your computer: `git clone https://github.com/<your-username>/moodlebox.net`.
1. Duplicate the folder containing the english content of the website. This folder is located here: `content/en`. Rename the duplicated folder with your language [ISO code](https://www.w3schools.com/tags/ref_language_codes.asp), e.g. `es` for Spanish, `ja` for Japanese, `zh` for Chinese, `ru` for russian, etc. Don't change the hierarchic structure of your new folder.
1. Open the page(s) you want to translate with a text editor, translate it (them) and save. __Do not change the filenames.__ Then commit your changes, e.g.: `git add content/es/<name-of-the-translated-page>.md ; git commit -a`. Don't commit the files you didn't translate yet.
1. Push your changes to Github: `git push`.
1. Create a pull request by visiting `https://github.com/<your-username>/moodlebox.net` and following the instructions at the top of the screen.

### What about the file names?

The file names, including the extension `.md`, must __absolutely not be changed__, as they are used to keep the page in relation with its translations, via the language switcher of the web site.

### What to do with the header of the file?

Every page comes with a header, not directly displayed in the website, but very important to get correctly. These are some rules to get it right.

- __title__: The title of the page, to be translated in your language. It is displayed in the main heading of the page, and serves as the title of internal links. Words of the title have also more weight in the internal search engine.

- __authors__: The author(s) of the page. When you edit an already existing page, please add your name on a new line after the existing name(s), with a dash, for example:
  ```yml
  authors:
    - Jane Doe
    - Nicolas Martignoni
  ```
  Note: The author name is __not__ displayed anywhere on the website.

- __type__: Should __not be changed__. Has to remain exactly identical to the english version of the translated version.

- __date__: The date of the creation of a new page, in YYYY-MM-DD format, e.g.
  ```yml
  date: 2018-12-23
  ```
  Do not change it if you edit an existing page, as this is intended as a date marker of the first creation of the page.

- __weight__: Should __not be changed__. Has to remain exactly identical to the english version of the translated version.

- __slug__: Sets the permalink of the page, in your language. It should obviously be something related with the title and the content of the page. The slug should __only contain lower-case characters and hyphens__. No special characters, no punctuation. For a french translated page, the following slug
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
1. Create a pull request by visiting `https://github.com/<your-username>/moodlebox.net` and following the instructions at the top of the screen.

[moodlebox]: https://moodlebox.net
[issues]: https://github.com/moodlebox/moodlebox.net/issues
[contact]: mailto:nicolas@martignoni.net
[markdown]: https://daringfireball.net/projects/markdown/
