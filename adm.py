
import pandas as pd

BaseDados = pd.read_excel('Base.xlsx',engine="openpyxl", sheet_name='Planilha1', usecols=[0,6,8])

cpfClient = 98217283834

   

def consultaCpf(cpfClient):

    for cpf in BaseDados.itertuples():
        print(cpf[1])

        if cpf[1] == cpfClient:
            #print("CLIENTE: ",cpf,indice)
            return cpf
        
    print(f'CPF {cpfClient} nao existe em nossa base de dados.')
    

pesquisa = consultaCpf(cpfClient)
print('ACHAMOS: ',pesquisa)


 #98217283834


