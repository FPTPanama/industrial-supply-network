## Registros DNS a Añadir en GoDaddy

### 1. Para el Dominio Principal (industrialsupply-us.com)

**Opción A: CNAME (Recomendada - Si GoDaddy lo permite)**

```
Tipo: CNAME
Nombre: @ (o deja en blanco)
Valor: industrial-supply-network.netlify.app
TTL: 3600
```

**⚠️ Nota**: Algunos proveedores DNS (incluyendo algunos planes de GoDaddy) **NO permiten CNAME en el dominio raíz (@)**. Si GoDaddy no permite CNAME en raíz, usa la Opción B.

**Opción B: Registros A (Si CNAME no está permitido)**
Netlify usa múltiples IPs para balanceo de carga. Añade **AMBOS registros A**:

```
Registro A 1:
Tipo: A
Nombre: @
Valor: 35.157.26.135
TTL: 3600

Registro A 2:
Tipo: A
Nombre: @
Valor: 63.176.8.218
TTL: 3600
```

**Importante**: Añade **ambas IPs** para mejor disponibilidad y balanceo de carga.

### 2. Para www (www.industrialsupply-us.com)

```
Tipo: CNAME
Nombre: www
Valor: industrial-supply-network.netlify.app
TTL: 3600
```

---

## Instrucciones para Roberto Almirall

### En GoDaddy:

1. **Inicia sesión** en tu cuenta de GoDaddy
2. **Ve a "Mis productos"** → Selecciona el dominio `industrialsupply-us.com`
3. **Haz clic en "DNS"** o **"Administrar DNS"**
4. **Busca la sección de registros DNS**

### Añadir Registros:

#### Para el dominio principal (@):

**Si GoDaddy permite CNAME en raíz:**

- Haz clic en **"Añadir"** o **"Agregar registro"**
- Tipo: **CNAME**
- Nombre: **@** (o deja en blanco si es el dominio raíz)
- Valor: **industrial-supply-network.netlify.app**
- TTL: **3600** (o el predeterminado)
- Guarda

**Si NO permite CNAME en raíz:**

- Añade **DOS registros A** (Netlify usa múltiples IPs):
  - **Registro A 1:**
    - Tipo: **A**
    - Nombre: **@**
    - Valor: **35.157.26.135**
    - TTL: **3600**
    - Guarda
  - **Registro A 2:**
    - Tipo: **A**
    - Nombre: **@**
    - Valor: **63.176.8.218**
    - TTL: **3600**
    - Guarda

#### Para www:

**⚠️ IMPORTANTE**: Si recibes el error "Record name www conflicts with another record", significa que **ya existe un registro para www**.

**Solución:**

1. **Busca en tu lista de registros DNS** el registro existente para `www`
2. **Elimínalo primero** (o edítalo si prefieres)
3. **Luego añade el nuevo registro CNAME**:
   - Tipo: **CNAME**
   - Nombre: **www**
   - Valor: **industrial-supply-network.netlify.app**
   - TTL: **3600**
   - Guarda

**Nota sobre el CNAME para @:**
Si ya añadiste los registros A para `@` y ahora intentas añadir un CNAME para `@`, GoDaddy dará error "Record data is invalid". Esto es **normal y esperado** - no puedes tener CNAME y A para el mismo nombre. Los registros A que ya añadiste son suficientes y correctos.

---

## Registros que DEBEN Mantenerse (No Tocar)

### Registros MX (Correo) - ✅ MANTENER

```
MX - Priority 0: industrialsupplyus-com04b.mail.protection.outlook.com
```

### Registros TXT - ✅ MANTENER

```
TXT: v=spf1 include:spf.protection.outlook.com -all
TXT: NETORGFT12554064.onmicrosoft.com
```

**⚠️ IMPORTANTE**: NO elimines ni modifiques estos registros. Son para el correo de Microsoft 365.

---

## Resumen de Registros

### Añadir (Nuevos):

- ✅ CNAME o A para `@` → Netlify
- ✅ CNAME para `www` → Netlify

### Mantener (Existentes):

- ✅ MX para correo
- ✅ TXT para SPF y Microsoft

---

## Verificación

Después de añadir los registros:

1. **Espera 15-30 minutos** para propagación
2. **Verifica que el sitio carga** en `https://industrialsupply-us.com`
3. **Verifica que www funciona** en `https://www.industrialsupply-us.com`
4. **Verifica que el correo sigue funcionando**

---

## SSL/HTTPS

Netlify puede proporcionar SSL incluso con DNS en GoDaddy, pero puede requerir configuración adicional. Netlify te guiará en el proceso cuando añadas el dominio.

---

## Nota sobre CNAME en Dominio Raíz

Algunos proveedores DNS (incluyendo algunos planes de GoDaddy) **no permiten CNAME en el dominio raíz (@)**. En ese caso:

1. Usa registro **A** con la IP de Netlify
2. O contacta a Netlify para obtener instrucciones específicas

---

## Contacto con Netlify

Si necesitas la IP específica o tienes dudas, puedes:

1. Añadir el dominio en Netlify primero
2. Netlify te dará instrucciones específicas de DNS
3. Comparte esas instrucciones con el cliente

---

## Ventajas de Mantener DNS en GoDaddy

- ✅ Control total del DNS
- ✅ Mantiene configuración de correo existente
- ✅ No requiere cambios en nameservers
- ✅ Más fácil de revertir si es necesario

## Desventajas

- ⚠️ SSL puede requerir configuración adicional
- ⚠️ Algunas funciones avanzadas de Netlify pueden requerir nameservers de Netlify
