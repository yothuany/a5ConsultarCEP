import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "../styles";

export default function ConsultaCEP() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleChangeCEP = (texto) => {
    const apenasNumeros = texto.replace(/\D/g, ""); 
    setCep(apenasNumeros);
  };

  async function buscarCEP() {
    if (!cep || cep.length < 8) {
      setErro("Digite um CEP válido com 8 dígitos.");
      setEndereco(null);
      return;
    }

    setErro("");
    setEndereco(null);
    setLoading(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
        setEndereco(null);
      } else {
        setEndereco(data);
      }
    } catch (error) {
      setErro("CEP inválido ou não encontrado.");
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de Endereço 📍</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (ex: 01001000)"
        keyboardType="numeric"
        value={cep}
        onChangeText={handleChangeCEP} 
        maxLength={8}
      />

      <TouchableOpacity style={styles.botao} onPress={buscarCEP}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
      )}

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      {endereco && (
        <View style={styles.resultado}>
          <Text style={styles.texto}>CEP: {endereco.cep}</Text>
          <Text style={styles.texto}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.texto}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.texto}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.texto}>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}
