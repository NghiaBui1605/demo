import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#FBAE3C",
    justifyContent: "space-between",
    borderBottomStartRadius: 45,
    borderBottomEndRadius: 45,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cartIcon: {
    marginRight: 8,
    alignItems: "center",
    backgroundColor: "#F8CF92",
    borderRadius: 8,
    width: 30,
    height: 30,
    paddingTop: 4,
  },
  avatarSmall: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 5,
  },
  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  editBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 6,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  location: {
    color: "black",
    fontWeight: "400",
    fontSize: 11,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 25,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: "#F8CF92",
    borderRadius: 8,
    paddingTop: 5,
    paddingLeft: 5,
    marginRight: 10,
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "black",
  },
  editBtnSmall: {
    backgroundColor: "#eee",
    padding: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  userRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 24,
  },
  menuLabel: {
    marginLeft: 20,
    fontSize: 16,
  },
  menuArrow: {
    marginLeft: "auto",
  },
});

export default styles;
