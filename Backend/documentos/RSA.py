#funcion para calcular maximo comun divisor
from math import gcd
def ValidarPrimo(numero):
    contador=0
    for i in range(1,numero+1):

        if (numero%i) == 0:
            contador +=1
    if contador == 2:
        return True
    else:
        return False


def RSA():
    print("Ingrese dos números primos para generar sus llaves")
    
    while True:
        p=int(input("ingrese p: "))
        q=int(input("ingrese q: "))

        if ValidarPrimo(p) == False or ValidarPrimo(q) == False:
            print("Uno de los numeros ingresados no es primo , porfavor intente otra vez .....")
        else:
            break
    n = p*q
    fi= (p-1)*(q-1)
    e=0
    d=0
    #escoger un e que sea coprimo con fi y con n , y debe ser menor que fi
    for i in range(2, fi):
        if gcd(i, fi) == 1 and gcd(i, n) == 1 and i<fi:
            e = i
            break
    #escoger un d que cumpla la condicion de "(D*E)%mod(fi)=1"
    for x in range (1,123456789):
        if (x*e)%(fi) == 1 and x!=e:
            d = x
            break
    
    print("Las llaves públicas son: E =",e,",N =",n," y las privadas son: D =",d,",P =",p,",Q =",q)
    
RSA()