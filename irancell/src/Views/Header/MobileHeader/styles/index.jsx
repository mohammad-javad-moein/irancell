const theme = (theme) => ({
  customer_ltr: {
    direction: "ltr",
    backgroundColor: "#000",
    color: "#fc0",
    width: "100%",
    height: "55px",
    display: "flex",
    alignItems: "center",
  },
  customer_rtl: {
    direction: "rtl",
    backgroundColor: "#000",
    color: "#fc0",
    width: "100%",
    height: "55px",
    display: "flex",
    alignItems: "center",
  },
  ham_ltr: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    direction: "ltr",
  },
  ham_rtl: {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    direction: "rtl",
  },
  ham_items: {
    padding: "15px",
    borderBottom: "1px solid #e9e9e9",
  },
  nav_ltr: {
    direction: "ltr",
    backgroundColor: "#fc0",
    width: "100%",
    display: "flex",
    height: "75px",
    alignItems: "center",
    padding: "0 20px",
  },
  nav_rtl: {
    direction: "rtl",
    backgroundColor: "#fc0",
    width: "100%",
    display: "flex",
    height: "75px",
    alignItems: "center",
    padding: "0 20px",
  },
});

export default theme;
