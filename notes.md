Components of the app
1. A login or singin with facebook page
    - with Devise
    - facebook omniaugth


2. Templates
  - Page for creators to upload content
  - A home page that contains 50 books each
  - A show page for reader / publisher's comics
  - A show page with details about a selected comic
  - One login and signup page for both users

2.5 Forms
  - upload comic book form



3. Features / View models
  - users can paginate from left to right
  - A Filter search options for genre and country
  <!-- - ratings
    - 1 - 5 stars -->

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
User
  has_many: comics

Comic
  has_many: users
  has_many: genres
  has_many: regions

Genre
  has_many: comics

  - User
      attr: name=0, email=1, password=2
    - publisher
    - writer
    - artist
    - reader

  - Comic
    attr: title, content, graphic novel =>default=>false

    seed the database
  - Genre
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
  - Region comic story is based
    attr: name
    - Caribbean
    - Latin and Central America
    - East Asia and Pacific
    - South Asia
    - Europe
    - Middle East
    - Africa

  -
