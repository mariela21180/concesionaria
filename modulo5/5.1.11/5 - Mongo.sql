// -------------------------MongoDB
// Hacer 3 consultas básicas (pasar colecciones con jerarquia)
// 	--> un count
// 	--> un limit
// 	--> un order by
// Hacer un join entre 2 tablas (pasar colecciones de tablas)

use "Northwind"

db.categories.count()

db.territories.find().limit(10)

db.employees.find().sort({Title: 1})

db.regions.aggregate([
    //{ "$match": { "RegionID": 2 } },
    { "$sort": { "RegionDescription": 1 } },
    //{ "$limit": 40 },
    {
        "$lookup": {
            "localField": "RegionID",
            "from": "territories",
            "foreignField": "RegionID",
            "as": "Territories"
        }
    },
    { "$unwind": "$Territories" },
    {
        "$project": {
            "_id": 0,
            "RegionID": 1,
            "RegionDescription": 1,
            "Territories.TerritoryID": 1,
            "Territories.TerritoryDescription": 1
        }
    }
])

    
    
    
    