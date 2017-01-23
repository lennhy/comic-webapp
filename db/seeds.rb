# World Regions
# Based on United Nations Country Grouping
regions = [
            'Africa',
            'Asia',
            'Central America',
            'Eastern Europe',
            'European Union',
            'Middle East',
            'North America',
            'Oceania',
            'South America',
            'The Caribbean'
]

genres = [
          'Action',
          'Horror',
          'SciFi',
          'Drama',
          'Noir',
          'Fantasy',
          'Adventure',
          'Superhero'
]

# mick = User.create(name: "Visceral Comics", role: 1, email: "mick@gmail.com", password: "password")
# dick = User.create(name: "Dick", role: 0, email: "dick@gmail.com", password: "password")
#
# comic = Comic.create(title: "The African Warrior", description: "An African Prince becomes his countries first superhero", issue:"1", volume: "1", page_count: "29", issue_date: "12-02-15", graphic_novel: "false")
#
# comic.genres << Genre.find_by(name: "Action")
# comic.genres << Genre.find_by(name: "Adventure")
# comic.region = Region.find_by(name: "Africa")
# comic.users << mick
# comic.users << dick

# comic_2 = Comic.create(title: "The American Warrior", description: "An American Tribal King becomes a detective with supernatural powers", issue:"2", volume: "1", page_count: "29", issue_date: "12-01-14", graphic_novel: "true")
#
# comic_2.genres << Genre.find_by(name: "Noir")
# comic_2.genres << Genre.find_by(name: "SciFi")
# comic_2.region = Region.find_by(name: "North America")
# comic_2.users << mick
# comic_2.users << dick

def create_obj(array, object)
  array.each do |value|
    object.create(name: value).save
  end
end


# def create_comic(title, description, issue, volume, count, date, bool)
#         Comic.create(
#             title: title,
#             description: description,
#             issue: issue,
#             volume: volume,
#             page_count: count,
#             issue_date: date,
#             graphic_novel: bool)
# end
# create_comic("The Best", "A story about a man and his dreams of becoming the world's best coder", "1", "2", "22", "2012-12-12", false)
# User.find(id: 1).comics << com

create_obj(regions, Region)
create_obj(genres, Genre)
