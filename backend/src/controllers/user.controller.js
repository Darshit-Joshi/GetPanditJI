import User from "../models/user.model";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const { name, mobile } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, mobile },
    { new: true },
  );

  res.json(user);
};
