import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image
} from 'react-native-svg';
export default function InstaIcon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={45}
      height={45}
      fill="none"
      {...props}
    >
      <Path fill="url(#a)" d="M0 0h45v45H0z" />
      <Defs>
        <Pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#b" transform="scale(.01111)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEyElEQVR4nO2cy29VVRSHLwOKjqsDCpiAMaKiWIsSHo1xaKLEKY8pCcrDmTiCONKgYUSBBhgCaqLgA5Uo8Q8wGA0+agLqEAExpcRabtvPrHQRSune99G1zzl37/0lN2lu2rXW+eV0nbXX3mfVaplMJpPJZDKZTCaTIsAC4AXgLeAU8AtwHbhFeYxpDD9rTBLb8xJrrdMAngEGgX/oHK4Dh4Cna1UHWAl8QWczCXwOPFWrGsB9wH6gTjzUgffk2mpVAHgE+IF4+R54uGyRVwFXiJ+/gTVlifwscIN0uAH0lZEurpIefwHLinzwSd5KlR+B+4sQWqqL1NkXWuQnIyvh2kU0WBlS6C/bDi0+Pg0lcq+ummJiDHgD6NHPbv2uGSaDLNe1dxEbu2e5ThG7WQ6G6MJ1UoOoWXpmuVa5s1tZyHRZCi2tThIRelGLNvothZaeLYmkjjdbtLHXUujTxMmY5uR2Hoa3+dhSaNkZKYOLwACwUauebmC+frr1u03yUAIulRTjT5ZCXysw8HHgBLC2xRjnAeuAk2qjKK5aCt3qv1O7nAUeNYj3MeCbgmL+z0blqcBD8y+w1SzgO3FvA0ZDB28ZcEiuyAaCWbD3xv5c6JauZbAhRV5uFqg/lQQT2zLQUOliVRO+HwJ2Al8BQ8BN/QzpdzuAJU3YWR0qjVRd6K0NfC4GjjVZQcjvHJVVXQObr6Ym9NkG/l4BRtrc19vQwPa5VIQe95VwwOvAxBzsy9/u8th/3LrOrqrQxxvcyXMR+TYTvjsb+IAEhF7rycntpAtfGulx+Fofu9AXZans8CEPPmuOeJbrf8Qs9ICnhAvRnxCbix0+D8cs9EaHfamTQ7Hd4XNzzEL3lrC7fsbhsy9mobsd9n8jHEMOnw/GLHSXw75ltTGTEc+GswlZ6CmGUxS622E/pw5joXsdQueHobHQmxxCS6szFK85fG6xcjCHZHFPUFYcdNhfEmjBUvcsWAZjFvqSZwku/WRrBj1L8D9jFlpY5/CxyPidmGFgocNXv6Gfygp90uPnRaMUIm3Slz1+PiQBocdls9Tja5dB43+nx/4Ko5535YUWvm7gb0ObaUTSxUseu5Kbv8WYKgstbGvgUw4dHmkyldS1iljYwGaQMrLqQo/K4ZYmfMvOy3Z9mf9X7YuM6M9npE52lXAz7KyR41spCo0eanHma8P4nwh5UNMyUAKLvdos2Nnv5KCnYS2DDc2oHG4xC/jOg29HqHQxnU48tntOzl0YxLsiRHVRxLHdIg+iTwDv65GAeS3ewf26GDGtk4s8iF7WqxW/6271Zt3jk9cpuvTzgH63RUs7s+MDZb5aEevLQhZ8ZCl0rK+/WbDHUuhYX+i0YL2l0At0LlzmbqRImG8mtPURqog4YCpyxGMk5sJksCGE2sTJTHE6iMjTmjNlDnCtCvXgIzWBd8u+ygrwTlCRp1Ug50mX7wobgSyzOnXYXmpcBpYWIvKMuaQpjcwclrnYhYo8Tey+RO7sy6WJPCONnI88Jy+tVQF9QO6LrPS7BbxtOgXMeKTmZx2+gpwEPrHY6Slq1v+AzoXrpAbRQNCZo6HQIVP9MrJMGuTABb2govYgZ2NMY7igMe3VGG27cJlMJpPJZDKZTCZT6xD+Bw8TuAekC6jrAAAAAElFTkSuQmCC"
          id="b"
          width={90}
          height={90}
        />
      </Defs>
    </Svg>
  );
}
