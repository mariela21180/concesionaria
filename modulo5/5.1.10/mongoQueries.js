// db.createCollection("SampleDataCollection")
// db.SampleDataCollection.insert([
// {  _id : 1, episodeName : "Dragonstone", directedBy : "Jeremy Podeswa", writtenBy : "David Benioff, D.B.Weiss", airedDate : "July2017"},
// {  _id : 2, episodeName: "Stormborn", directedBy : "Mark Mylod", writtenBy : "Bryan Cogman", airedDate : "July2017"},
// { _id : 3, episodeName: "The Queen’s Justice", directedBy : "Mark Mylod", writtenBy : "David Benioff, D.B.Weiss", airedDate : "July2017"},
// {  _id : 4, episodeName: "The Spoils of War", directedBy : "Matt Shakman", writtenBy : "David Benioff, D.B.Weiss", airedDate: "August2017"},
// {  _id : 5, episodeName: "Eastwatch", directedBy : "Matt Shakman", writtenBy : "Bryan Cogman", airedDate: "August2017"}
// ])

// db.SampleDataCollection.find()


// db.SampleDataCollection.find({ _id : 5 })

// db.SampleDataCollection.find( { _id : 5}, { episodeName : 1, writtenBy : 1})
// trae solo esos dos campos


// db.SampleDataCollection.find( { _id : 5}, { episodeName : 0, writtenBy : 0})
// trae todos los campos menos  esos dos campos (en SQL no se puede esto)

// db.SampleDataCollection.find().sort( { _id : -1 })

// db.SampleDataCollection.find({ directedBy : "Mark Mylod"}).sort( { _id : -1 })

// db.SampleDataCollection.find().limit(2)

// db.SampleDataCollection.find( {airedDate : "July2017"} ).limit(2)

// db.SampleDataCollection.find().skip(4)

// db.SampleDataCollection.find( { directedBy : "Matt Shakman" } ).skip(1)
// esto no se puede hacer en sql

// db.SampleDataCollection.count()

// db.SampleDataCollection.find({ airedDate : "August2017" }).count()

// db.SampleDataCollection.findOne({ airedDate : "August2017" })