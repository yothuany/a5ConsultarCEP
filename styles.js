import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  erro: {
    color: "red",
    textAlign: "center",
    marginTop: 15,
  },
  resultado: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
});
