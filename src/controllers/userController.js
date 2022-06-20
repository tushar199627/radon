const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    return res.status(201).send({ msg: savedData });
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });


    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    return res.status(201).send({ status: true, token: token });
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })
  }
};


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);

    return res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    return res.status(200).send({ status: true, data: updatedUser });
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    return res.status(200).send({ status: true, data: updatedUser })
  } catch (err) {
    console.log(err.message)
    res.status(500).send({ error: err.message })
  }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

// 201 => create
// 200 => not create


// 4XX => client error
// 400 => Bad request.
// 401 => authenticate => token is present hona chaiye , if not 401 error
// 403 => authorize   => token ko verify krta hai, if not verified then 403 error.
// 404 => Not found

// 500 => server side error