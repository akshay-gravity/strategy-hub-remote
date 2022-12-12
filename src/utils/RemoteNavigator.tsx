//performs all the navigation for the remote app
const RemoteNavigator = (props: any) => {
  let url: any = "";
  switch (props.page) {
    case "map":
      url = "/map";
      break;
    case "vac":
      url = "/vac";
      break;
    case "home":
      url = "/home";
      break;
    case "views":
      url = "/views";
      break;
  }
  return url;
};

export default RemoteNavigator;
