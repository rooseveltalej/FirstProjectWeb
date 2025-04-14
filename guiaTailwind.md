# Guía Básica de Tailwind CSS

Una referencia rápida para las clases más comunes de Tailwind CSS.

---

## 📏 Breakpoints (Responsive)

Estas clases indican a partir de qué tamaño de pantalla se aplica un estilo:

| Clase | Se activa desde... | Ejemplo |
|-------|--------------------|---------|
| `sm:` | 640px (móvil grande) | `sm:text-lg` |
| `md:` | 768px (tablet) | `md:flex` |
| `lg:` | 1024px (laptop) | `lg:py-10` |
| `xl:` | 1280px (monitor grande) | `xl:text-3xl` |
| `2xl:` | 1536px | `2xl:max-w-screen-xl` |

---

## 🧱 Espaciado (Padding y Margin)

| Clase | Significado | Valor |
|-------|-------------|-------|
| `p-4` | Padding en todos lados | 1 rem |
| `px-6` | Padding horizontal | 1.5 rem |
| `py-2` | Padding vertical | 0.5 rem |
| `pt-10` | Padding arriba | 2.5 rem |
| `m-0` | Margin 0 | - |
| `mt-8` | Margin top | 2 rem |

> `p` = padding, `m` = margin  
> `x` = horizontal, `y` = vertical  
> `t`, `r`, `b`, `l` = top, right, bottom, left

---

## 🎨 Colores

| Clase | Qué hace |
|-------|----------|
| `bg-blue-500` | Fondo azul medio |
| `text-white` | Texto blanco |
| `bg-gray-100` | Fondo gris claro |
| `text-red-600` | Texto rojo fuerte |
| `bg-primary` | Color personalizado (definido en tailwind.config.js) |

---

## 🔠 Tipografía

| Clase | Significado |
|-------|-------------|
| `text-sm` | Texto pequeño |
| `text-lg` | Texto grande |
| `text-3xl` | Muy grande |
| `font-bold` | Negrita |
| `font-extrabold` | Súper negrita |
| `text-center` | Centra el texto |
| `tracking-wide` | Espaciado entre letras |
| `leading-tight` | Espaciado vertical entre líneas reducido |

---

## 📐 Tamaños y Layout

| Clase | Qué hace |
|-------|----------|
| `w-full` | Ancho 100% |
| `h-screen` | Alto igual al de la pantalla |
| `max-w-xl` | Máximo ancho ~36rem |
| `flex` | Activa Flexbox |
| `items-center` | Centrado vertical en flex |
| `justify-between` | Distribuye espacio horizontalmente |

---

## 🧼 Visibilidad y Display

| Clase | Qué hace |
|-------|----------|
| `hidden` | Oculta el elemento |
| `block` | Display bloque |
| `inline-block` | Display en línea tipo botón |
| `md:hidden` | Oculto en pantallas medianas o mayores |
| `lg:flex` | Display flex desde pantallas grandes |

---

## 🌈 Efectos Visuales

| Clase | Qué hace |
|-------|----------|
| `shadow-md` | Sombra mediana |
| `drop-shadow-lg` | Sombra suave para texto |
| `hover:bg-gray-100` | Cambio de color al pasar el cursor |
| `transition duration-300` | Transición suave de 300ms |

---

## 🧪 Ejemplo Completo

```html
<h1 class="text-4xl md:text-6xl font-bold text-center text-white mt-10">
  Bienvenidos
</h1>
