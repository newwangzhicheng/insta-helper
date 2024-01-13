import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image
} from 'react-native-svg';
export default function HomeIcon(props: SvgProps) {
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9ElEQVR4nO2cO2gUQRyH9yIarSKKb2OlhY/KKmgQxNpCULCyFMEniopiYeejUhACKS1VBNFaMfGBhaiIGtDKN6LiW5HETxZHPLnN7s7uf2Zv9v5fFZK7vW9+tzv7u9m9RJGiKIqiKIqiKIpSDmAqcBJ4D7wFTsS/K7lZpRlgLfCMVl4Bm/57sGIPMAc4RzYXgQUFXqKzARrAZuAj+fkC7AcmVO0fBMAi4ArFuQEsrXocbQsw0eyRPyjPT+AoMLnqcbUVwCpgJGeIIxaPfRRvO+p0gB5T2cZs9lLLvf8XcBqYHnUijF/ZkrgNLE/YxjIzJ+ehs6og+StbzNesJlGgodS7CmIfyCWbQCzfwHpWQewq2+syh7jllFSPKih90gJmA2fM4d8rfZKNQgToBx7m3LOeAGsypp1NwLum53wAdgJdQg6P0xzaDum9CVgIXE7ZxnVgScrz61cFJSpbwYD+vmHd0TjUogo6qGwrgAfYEx/+q2tXBaUrG3bTTtbhP60WVVC6svFn2nmKHPHhvyHYKuiwsrkivCroobK5IowqWEFlc0X7VsEKK5sr8lRBm/NPuSoITAHO5nyxT8A2wUPTB7FLf4pvF7DVolGdKTR3AwM5X+ACMD9j2hkoWdlcMWbcelL855sx5uFUkaDjm1TSeJmjPq0DXtD+xI7rMsay3ow5jTdFgn6echIYTLtLCJgLnCc8zsfuGXdLDZoMknhaJOgDCRsaSbvYaea1LaZOhcoHM4auAheTDxQJOu65u4D7wD3TFtIq22JgmPowHI8pZbzdwD6TzX2TVcM6aIs3pB0qW2VV0AslVtlCI3VV0GXAEqtsoZG5KigdsvQqW2hkrgpKBa0AGrQnNGhPaNCe0KA9oUF7QoP2hAbtCQ3aE3ULehQYAvYAfcBMs4g10fzcZ/42ZB7rjboE/c2sms208IqDP2ae65w6BH027RpkDr9ei9u9CiObavJAXK6OHZZYPDcXLfa7XF2USTN9EC4YAzY6cN3oKmxp1yR5Fxx06HvIhbAr32ZxF3Nyw6Fvw8Wc7cq3WVyS72l3ego6zzM3wIsRWtBHnAv/8z4uKe5DWIpRm54s4D1L8sToQ1iKq85lW92vScn7kJVit3PZVve9UvI+ZKXocy7b6r5SSt6HrBQznMsmz9Mi+JCVYpJz2eT75UTwIRuGaOj+wYiG7h+MaOj+wYiG7h+MaOj+wYiG7g98DkJ0HCTc4+8eRq4BbkmYRhUh4Q7c9CG6Q8I0qggJ9/hbwr4+Xd0taxpVhEDId7x9qjVf2y0VdlQRAiHP8y0c79nb4/mqyAkyqogC4X42/31mWxXrM4qiKIqiKIqiKIqiKFEb8htoUEnbF87f+QAAAABJRU5ErkJggg=="
          id="b"
          width={90}
          height={90}
        />
      </Defs>
    </Svg>
  );
}
