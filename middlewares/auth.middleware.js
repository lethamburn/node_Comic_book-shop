const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role === "admin") {
      // el objeto req.user lo añade passport después que express-session lo recupere
      return next();
    } else {
      return res.redirect("/");
    }
  } else {
    return res.redirect("/auth/login");
  }
};

module.exports = {
    isAuth, 
    isAdmin,
}