import User from "../models/User.js";

/* 
 getAllUsers

*/
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name email phone _id");

    res.json({
      success: true,
      users: users.map((user) => ({
        id: user._id,
        name: user.name || "Unknown", // If name is missing, show "Unknown"
        email: user.email,
        phone: user.phone,
      })),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

/* 
  getUser
*/
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
};
