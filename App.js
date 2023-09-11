import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContadorVogais = () => {
  /* estado palavra para armazenar a palavra inserida pelo usuário */
  const [palavra, setPalavra] = useState('');
  /* estado quantidadeVogais para armazenar o número de vogais */
  const [quantidadeVogais, setQuantidadeVogais] = useState(0);

  /* A função contarVogais utiliza uma expressão regular (/[aeiouAEIOU]/g) para 
     encontrar todas as vogais na palavra fornecida pelo usuário e, em seguida, 
     atualiza o estado quantidadeVogais. */
  const contarVogais = () => {
    const vogais = palavra.match(/[aeiouAEIOU]/g);
    const quantidade = vogais ? vogais.length : 0;
    setQuantidadeVogais(quantidade);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite uma palavra:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPalavra(text)}
        value={palavra}
      />
      <Button title="Contar Vogais" onPress={contarVogais} />
      <Text style={styles.resultado}>
        Quantidade de vogais: {quantidadeVogais}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default ContadorVogais;