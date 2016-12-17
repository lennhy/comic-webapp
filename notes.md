Components of the app
1. A login or singin with facebook page
    - with Devise
    - facebook omniaugth


2. Templates
  - Page for creators to upload content
  - Page for readers
  - option to choose to be a reader or creator
3. Features / View models
  - An upload page for creators
  - A home page that contains 25 books each
  - users can paginate from left to right
  - A Filter search options for genre and country
  - ratings
    - 1 - 5 stars
  - Once login and signup page for both users

4. Filter by Criteria
    - Genre
      - Action, Horror, SciFi, Drama, Noir, Fantasy, Adventure, Superhero, Graphic Novel
      - Region
      - Caribbean
      - Latin and Central America
      - East Asia and Pacific
      - South Asia
      - Europe
      - Middle East
      - Africa

5. Models
  - user
      attr: name=0, email=1, password=2
    - publisher
    - writer
    - artist
    - reader

  - comicbook
    attr: title, content

    seed the database
  - genre
    attr: ttile
    - Action,
    - Horror,
    - SciFi,
    - Drama,
    - Noir,
    - Fantasy,
    - Adventure,
    - Superhero,
    - Graphic Novel

    seed the database
  - Region
    attr: name
    - Caribbean
    - Latin and Central America
    - East Asia and Pacific
    - South Asia
    - Europe
    - Middle East
    - Africa

    seed the database
    - Cultures
    attr: name
      same as countries
