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

create_obj(regions, Region)
create_obj(genres, Genre)
