print("Introduzca los siguientes datos para desencriptar su mensaje: ")
n = int(input("Valor de n: "))
d = int(input("Valor de d: "))
c = int(input("Valor de mensaje cifrado: "))
descrifrado= (c**d)%n
print("Su mensaje descifrado es: ",descrifrado)