<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Cadastro</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="../index.php">Início</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="">Listas Usuários</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="containerSection">
            <form action="verificarCadastro.php" method="post">
                <input type="email" placeholder="Informe seu e-mail" name="email" id="email">
                <input type="submit" value="Buscar">
            </form>
        </section>
        <section>

            <?php
                
                //Verificar se o campo email está preenchido

                if(isset($_POST["email"])) {
                    //Exibir as informações passadas pelo form
                    // echo var_dump($_POST);
                    
                    //Salva as informações de email enviados pelo form
                    $email = $_POST["email"];
                    
                    //Receba as informações de conexão com o DB
                    include("../conexao/conexao.php");

                    //Query ao banco de dados
                    $sql = "SELECT * FROM usuarios WHERE email = ?";
                    //Preparar a conexão junto com a consulta
                    $stmt = $conn->prepare($sql);
                    
                    //Validando se a conexão foi feita com sucesso
                    if($stmt){
                        //Troca a informação de email pela ? (previne hack/roubo)
                        $stmt->bind_param("s", $email);
                        //Executa o comando
                        $stmt->execute();
                        //Salva o resultado da consulta
                        $resultado = $stmt->get_result();
                        // echo var_dump($resultado);
                        
                        if ($resultado->num_rows > 0) {
                            //Armazenar as informações vindas do DB
                            $row = $resultado->fetch_assoc();
                            echo "
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Sobrenome</th>
                                            <th>Email</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>{$row['ID']}</td>
                                        <td>{$row['NOME']}</td>
                                        <td>{$row['SOBRENOME']}</td>
                                        <td>{$row['EMAIL']}</td>
                                        <td>
                                            <form action='excluirCadastro.php' method='post'>
                                                <input type='hidden' name='id' value='{$row['ID']}'>
                                                <input type='submit' id='btn-excluir' value='Excluir'>
                                            </form>
                                        </td>
                                    </tbody>
                                </table>
        
                                ";
                    }else {
                        echo "<div class='mensagem erro'> Email $email não encontrado </div>";
                        }
                    //Encerra consulta do SQL
                    $stmt->close();
                }else {
                echo "<div class='mensagem erro'>Erro na consulta </div>";
                }
            //Encerra a conexão com o banco de dados
            $conn->close();
        }
            ?>

        </section>
    </main>

</body>
</html>
