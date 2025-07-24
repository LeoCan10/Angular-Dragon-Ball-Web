grados = input("Ingrese los grados: ")
respuesta = input("Ingrese Farenheit (F) o Celsius (C): ").lower

if respuesta == 'F':
  print(grados * 0,555)
elif respuesta == 'C':
  print(grados * 1.8)
else: 
  print("Ingrese una letra valida")