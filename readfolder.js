const fs = require('fs');
fs.readdir("\serverless-h1mpex/cactividadprofesional", (err, files) => {
  if (err) {
    console.log(err)
  } else {
    files.forEach(file => {
      console.log(file);
    });
  }
})