# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "example user",
            image_url: "https://cdn4.vectorstock.com/i/1000x1000/76/93/smiley-face-vector-467693.jpg")
User.create(name: "cinderella",
            image_url: "https://secure.img1-fg.wfcdn.com/im/71703095/compr-r85/2750/27507545/"\
            "cinderella-life-size-cardboard-cutout.jpg")

Shoe.create(name: "glass slipper", size: "9", style: "stilletto", heel_height: "4 inches", color: "ff000", user_id: 2)
Shoe.create(name: "example shoe 1", size: "9", style: "stilletto", heel_height: "4 inches", color: "ff000", user_id: 1)
