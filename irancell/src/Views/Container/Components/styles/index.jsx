const theme = (theme) => ({
  simType_container: {
    display: "flex",
    border: "1px solid #e6e6e8",
    borderRadius: "25px",
    width: "70%",
    fontSize: "14px",
  },
  active: {
    backgroundColor: "#fc0",
    padding: "6px",
    width: "100%",
    borderRadius: "25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
  },
  not_active: {
    padding: "6px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  price_active: {
    backgroundColor: "#fc0",
    borderRadius: "25px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
  },
  price_not_active: {
    backgroundColor: "#f0eff5",
    borderRadius: "25px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
  },
  title: {
    color: "#939298",
    fontSize: "14px",
    marginBottom: "10px",
    marginTop: "25px",
  },
  detail: {
    fontWeight: 700,
    fontSize: "14px",
  },
});

export default theme;
