<?php
    include("../conexao/conexao.php");
    $nomes = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];

    foreach ($nomes as $id => $nome){
        $sobrenome = $sobrenome[$id];

        $sql = "UPDATE usuarios SET NOME = ?, SOBRENOME = ? WHERE ID = ?";
    
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $nome, $sobrenome, $id);
        $stmt->execute();
    };
    $stmt->close();
    $conn->close();
    header("Location: atualizarCadastro.php");
?>