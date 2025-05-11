
export function ProfilePicture() {

	const imageUrl = './src/assets/images.jpg';

	const onclickHandler = (e) => e.target.style.display = "None"

	return <div>
		<img onClick = {(e) => onclickHandler(e)} src={imageUrl} alt="profile" />
		</div>
}	