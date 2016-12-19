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

def create_obj(array, object)
  array.each do |value|
    object.create(name: value).save
  end
end


def create_comic(title, description, issue, volume, count, date, bool)
        Comic.create(
            id: 1,
            title: title,
            description: description,
            issue: issue,
            volume: volume,
            page_count: count,
            issue_date: date,
            graphic_novel: bool)
end
create_comic("The Best", "A story about a man and his dreams of becoming the world's best coder", "1", "2", "22", "2012-12-12", false)
User.find(id: 1).comics << com

create_obj(regions, Region)
create_obj(genres, Genre)
