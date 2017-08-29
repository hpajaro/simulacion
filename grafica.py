import matplotlib.pyplot as plt
import numpy as np

datos=np.arange(0,360)
datos=np.radians(datos)
datos=np.cos(datos)
plt.plot(datos,"r--")
plt.show()