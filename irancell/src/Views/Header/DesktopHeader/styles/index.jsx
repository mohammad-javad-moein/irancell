const theme = (theme) => ({
  container: {
    backgroundColor: "#fc0",
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
  },
  logo: {
    width: "80px",
    height: "44px",
  },
  customer_container: {
    width: "100%",
    height: "100%",
    color: "#fc0",
    padding: "15px 0",
  },
  orgCustomers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  iconSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default theme;
