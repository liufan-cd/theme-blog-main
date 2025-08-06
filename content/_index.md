---
title: 'Home'
date: 2025-08-04
type: landing
show_date: false
reading_time: false
sections:
  - block: resume-biography
    content:
      # The user's folder name in content/authors/
      username: admin
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: 'text-align: justify; font-size: 0.8em;'
  - block: collection
    content:
      title: Section 1
      subtitle: A subtitle
      text: Add any **markdown** formatted content here - text
      filters:
        date:
        after: "2020-01-01"
        authors: admin
        folders:
          - blog
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      # Choose your content listing view - here we use the `showcase` view
      view: card
      # For the Showcase view, do you want to flip alternate rows?
      flip_alt_rows: true
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---
