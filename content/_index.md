---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: skills
  #   content:
  #     title: Skills
  #     text: ''
  #     # Choose a user to display skills from (a folder name within `content/authors/`)
  #     username: admin
  #   design:
  #     columns: '1'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        # - title: CEO
        #   company: GenCoin
        #   company_url: ''
        #   company_logo: org-gc
        #   location: California
        #   date_start: '2021-01-01'
        #   date_end: ''
        #   description: |2-
        #       Responsibilities include:

        #       * Analysing
        #       * Modelling
        #       * Deploying
        - title: Coding Trainer
          company: Sheikh Hasina University
          company_url: ''
          company_logo: shu
          location: Netrokona, Bangladesh
          date_start: '2023-07-01'
          date_end: '2023-12-31'
          description: Taught data structures, algorithms, and C and C++ programming, kept track of progress, and organized and managed practice contests.
        - title: Teaching Assistant & Coding Trainer
          company: Jahangirnagar University
          company_url: ''
          company_logo: juniv
          location: Savar, Dhaka, Bangladesh
          date_start: '2021-12-01'
          date_end: '2024-02-29'
          description: Taught data structures, algorithms, C and C++ programming, as well as organized and managed practice contests.
    design:
      columns: '2'
  - block: accomplishments
    id: achievements
    content:
      title: 'Achievements'
      subtitle:
      date_format: Jan 2006
      items:
        - date_end: '2024-03-30'
          date_start: '2018-07-01'
          organization: Bangladesh
          description: |2-
              * Ranked 3rd out of 165 teams in ICPC Asia Dhaka Regional Contest 2021 (Team: JU_kzvd4729).
              * Ranked 17th out of 58 teams in ICPC Asia West Continent Finals 2021 (Team: JU_kzvd4729).
              * Ranked 12th out of 114 teams in BUET Inter University Programming Contest 2022(Team: JU_kzvd4729).
              * Ranked 12th out of 97 teams in RUET CSE FEST 2k22 IUPC(Team: JU_262627).
              * Ranked 14th out of 105 teams in Cefalo CodeFiesta 2022: AUST IUPC(Team: JU_kzvd4729).
              * Ranked 24th out of 110 teams in ICPC Dhaka Regional 2020(Team: JU_Amigos).
              * Ranked 1st out of 57 teams in MBSTU Inter Department Programming Contest 2020A(Team: JU_Fury).
              * Ranked 4th out of 86 participants in Cub Hunting Programming Contest 2019(Name: Alif Al Hasan).
          title: Competitive Programming Excellence
          url: ''
        - date_end: '2024-03-30'
          date_start: '2018-07-01'
          organization: Codeforces, Codechef, Hackerrank etc.
          description: |2-
              * Codeforces - Max rating 1931 (Top 2%), Username: alif_cse_ju.
              * Codechef - Max rating 2084 (Top 2%), Username: alif_cse_ju.
              * StopStalk - Solved over 4500 programming problems on different online judges, Username: alif_cse_ju
          title: Online Problem Solving Achievements
          url: ''
    design:
      columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Software Engineering
          tag: Software Engineering
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Other
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: accomplishments
    id: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: https://coursera.org/share/9a907fcf1aed3a7ee2ecb252707b7adf
          date_end: ''
          date_start: '2020-07-21'
          description: ''
          icon: coursera
          organization: Coursera
          organization_url: https://www.coursera.org
          title: Python for Everybody Specialization
          url: https://www.coursera.org/specializations/python
        # - certificate_url: https://www.edx.org
        #   date_end: ''
        #   date_start: '2021-01-01'
        #   description: Formulated informed blockchain models, hypotheses, and use cases.
        #   icon: edx
        #   organization: edX
        #   organization_url: https://www.edx.org
        #   title: Blockchain Fundamentals
        #   url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
        # - certificate_url: https://www.datacamp.com
        #   date_end: '2020-12-21'
        #   date_start: '2020-07-01'
        #   description: ''
        #   icon: datacamp
        #   organization: DataCamp
        #   organization_url: https://www.datacamp.com
        #   title: 'Object-Oriented Programming in R'
        #   url: ''
    design:
      columns: '2'
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      # subtitle:
      # text: |-
      #   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # # Contact (add or remove contact options as necessary)
      email: alif.stu2017@juniv.edu
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      # address:
      #   street: 450 Serra Mall
      #   city: Stanford
      #   region: CA
      #   postcode: '94305'
      #   country: United States
      #   country_code: US
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # # Choose a map provider in `params.yaml` to show a map from these coordinates
      # coordinates:
      #   latitude: '37.4275'
      #   longitude: '-122.1697'  
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # # Automatically link email and phone or display as text?
      # autolink: true
      # # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
---
