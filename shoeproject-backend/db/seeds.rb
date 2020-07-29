# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'example user', image_url: 'https://www.google.com/search?q=cinderella&sxsrf=ALeKk00tF6tNTWnPrp-YjxLl_fc7PTEgpg:1595514344333&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizi-mNyuPqAhWzZDUKHUe0CNAQ_AUoAXoECCoQAw&biw=1673&bih=902#imgrc=gVETMp8GCn4GGM')
User.create(name: 'cinderella', image_url: 'https://www.google.com/search?q=cinderella&sxsrf=ALeKk00tF6tNTWnPrp-YjxLl_fc7PTEgpg:1595514344333&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizi-mNyuPqAhWzZDUKHUe0CNAQ_AUoAXoECCoQAw&biw=1673&bih=902#imgrc=gVETMp8GCn4GGM')

Shoe.create(name: 'glass slipper', size: '9', style: 'stilletto', heel_height: '4 inches', color: 'ff000', user_id: 2)
Shoe.create(name: 'example shoe 1', size: '9', style: 'stilletto', heel_height: '4 inches', color: 'ff000', user_id: 1)