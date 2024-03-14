const asyncHandler = require("express-async-handler");

const RegModel = require("../model/registration.model");

// POST: Registration user
exports.RegUserPost = asyncHandler(async (req, res) => {
  // get all data from body
  const { name, email } = req.body;

  try {
    // // all the data should exists
    // if (!name || !email) {
    //   res.status(400);
    //   throw new Error("All fields are mandatory!");
    // }

    // save the user in DB
    const user = new RegModel({
      name,
      email,
    });

    user.save().then((data) => {
      res.status(201).json(data);
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

// // POST: post the Blog details
// exports.postBlog = asyncHandler(async (req, res) => {
//   const data = new blogModel({
//     blogImg: req.body.blogImg,
//     title: req.body.title,
//     subTitle: req.body.subTitle,
//     description: req.body.description,
//     month: req.body.month,
//   });

//   data
//     .save()
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((err) => {
//       console.error("Error Creating Blog:", err);
//       res.status(500).json({
//         message: "Internal server error creating blog",
//         error: err.message || "Internal Server Error",
//       });
//     });
// });