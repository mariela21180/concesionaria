//Double quotes quote object names (e.g. "field"). Single quotes are for strings 'string'
mb.runSQLQuery(`

       -- SELECT * FROM SampleDataCollection
       
       -- SELECT * FROM SampleDataCollection WHERE _id = 5
       
       -- SELECT _id, episodeName, writtenBy
       -- FROM SampleDataCollection
       -- WHERE _id = 5
       
       -- SELECT * FROM SampleDataCollection ORDER BY _id DESC
       
       -- SELECT * FROM SampleDataCollection
       -- WHERE directedBy = 'Mark Mylod'
       -- ORDER BY _id DESC
       
       -- SELECT * FROM SampleDataCollection LIMIT 2
       
`).sort({_id:-1})
  .limit(100)