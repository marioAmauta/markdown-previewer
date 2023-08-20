import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function ExpandIcon() {
  return <FontAwesomeIcon icon={faExpand} />;
}

export function CompressIcon() {
  return <FontAwesomeIcon icon={faCompress} />;
}

export function MoonIcon() {
  return <FontAwesomeIcon icon={faMoon} />;
}

export function SunIcon() {
  return <FontAwesomeIcon icon={faSun} />;
}
