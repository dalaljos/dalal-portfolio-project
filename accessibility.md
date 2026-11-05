<h1>Accessibility Lab Auditing</h1>
Findings from Page Speed:
My Initial accessibility score was a 95. Pagespeed identified an irregular contrast between my foreground and background colors. The issue affected all of the rellink elements and other clickable texts. I updated it in css to make sure the contrast for all clickable text is improved and works well against the dark background.

Additions to CSS:
a, a:visited {
    color: white;
}
// This makes the hyperlinks easier to read without changing the entire layout or design of my website.

Final Result:
after pushing and commiting the files to github. I analyzed the page again, and the desktop results came out to be 100 across all 4 categories. 