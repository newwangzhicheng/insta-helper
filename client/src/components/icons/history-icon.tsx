import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image
} from 'react-native-svg';
export default function HistoryIcon(props: SvgProps) {
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD8klEQVR4nO2dSWsVQRDHC4wbil7VCCLiF4h6UjGIelUPKrhhNHpJIG7BqzeXUwj4NeJ2UPQDCBKNmosX9eKCZvVkBONPirTwxPdetl5qZvoH7zLMTHf9mdfTVV1dI5LJZDKZTCaTyWQymbkBLAF2AOeA28A94A3wDhgHfrrfuDv2xp1zy12zXe8xx+aqBbARuAg8BL6zeCaBB0AP0CpVBlgJnAKeAtOE4xfwBDgJrJCqAKx2T9on4vMNuA6slbICLAV6gTHSo324on2SMgHsBoaxx1tgnxQdHROBO8BvD6JMuadwnftddccWi/atH1guRQTYCrzEH1fqtKFDkS8GgS1SJPTv6GmaVsu6Ou2sxy86LdwrRQA4DPzwLABN2vONOkPHxDLAhVBzYmncZgjUhvNiEeCQcw6CII3bJaDYR8USOq55mgE0pEnbIdFh5IAYml34fvH9R5P2QzOZfDaic0/gRQRjadKHGAwmnWc7ZyQK0rgPseiPq+6/brUPj29ONOlHLNTWPbFFbgFeRzQSA0Lj4jXxAlGeXd8iCa1cihlPHq2w0KOqQQyhryUwDkNC1w1whQh7fk5hmdgS+osuxYUU+nQiwzAmtHI8pNC6kJoEsSf0o1Ait4YMGhVQ6OkgqQwu7yIZYk9opTuE0JrckgyxKfRAiDStiZQWiU2hJ7ymn7lcuKSITaGVbT6F7kxtjdgVusOn0JrVmRSxK/QNn0LfT22N2BXa3wsxdki0YEIP+RT6w0LTt7x1ogGk5734YgFh0bDRrRpIz4j4wi27z4fgT/JfSM+UJBR6vbfGZ4GSCT3foaPXW+OzQMmGjoW8DHtjPNmU7GWYfHpnmKFSOSyGGSiVC24Yry647kjN1OdMqcKkhmkrVeDfKH4D/05s3VudCbmU5YTWbcWZf+kKIfSGlOkGBvkVLKbjqgRkQibQOKG17EMmQkrYikTlH6wRNskxVRK6QS4HFdkJvUpDg1SX0SiJ6E5sXQ+sKj1RRK7ZLPSK6jEcvWoNsCvm9jcDxN/+ViO2Vm6pCn1JRK7Zoqzbd8vOc2BZMqGd2FvcxvQyR+g2iwWA9hBVZwygaRb7xRLAwZIFnaaBI2IRLY8TuPxlLPSB6RTLuJI/RR5GpsyV+Jml9M9kQV987VIkgE3AM4rDYPKSPoucZ/cb9yC1b33J58ke3fXX2EP7tFPKBDOBqEtGQqwjbrG5RcoKM/FsNfJjAoG/ukLda6QqMLMsdgJ4HNjR0Xs/0jW+SpWer4ermtsN3HVfo1gs4+5eXTG3eRQKZtLP2oCzwE3NBtIcZPcpkLGaz4OMuWND7hw9t8Ndmz8PkslkMplMJpPJZDIyR/4AHP79tg/mkAIAAAAASUVORK5CYII="
          id="b"
          width={90}
          height={90}
        />
      </Defs>
    </Svg>
  );
}
