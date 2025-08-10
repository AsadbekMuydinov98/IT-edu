import { useState } from 'react';
import { Button, Heading, Input, Tag, Text, TextArea } from '../components';

const Index = () => {
	const [isClick, setIsClick] = useState(false);

	return (
		<div>
			<Heading tag='h2'>Heading</Heading>
			<Text size='small'>Text</Text>
			<Tag size='small' color='danger'>
				Red
			</Tag>
			<Tag size='medium' color='success'>
				Green
			</Tag>
			<br />
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>
			<Button appearance='primary' arrow='down'>
				Down
			</Button>
			<br />
			<Input placeholder='Enter' /> <br />
			<div>
				<TextArea placeholder='Message' />
			</div>
		</div>
	);
};

export default Index;
