const fakeUser = {
  userName: "Yerixxz",
  loggedIn: false,
};
const videos = [
  {
    id: 1,
    title: "Video #1",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Video #2",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Video #3",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("Search Video");

export const watch = (req, res) => {
  // console.log(req.params.id);
  // const video = videos[req.params.id - 1];
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log(req);
  return res.render("edit", {
    pageTitle: `Editing ${video.title}`,
    video,
  });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  console.log(req.body);
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title,
    createdAt: "Just Now",
    views: 0,
    comments: 0,
    ratings: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
