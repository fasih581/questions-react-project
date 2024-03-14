const asyncHandler = require("express-async-handler");

const RegModel = require("../model/registration.model");

// POST: Registration user
exports.RegUserPost = asyncHandler(async (req, res) => {
  // get all data from body
  const { name, email } = req.body;

  try {
    // save the user in DB
    const user = new RegModel({
      name,
      email,
    });

    user.save().then((data) => {
      res.status(201).json({regId: data._id});
    });
;
  } catch (error) {
    console.log(error);
  }
});
