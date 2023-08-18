import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

export function ExpandButton() {
  return <FontAwesomeIcon icon={faExpand} />;
}

export function CompressButton() {
  return <FontAwesomeIcon icon={faCompress} />;
}
