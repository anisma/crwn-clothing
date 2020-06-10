import React from "react";
import "./homepage.styles.scss";
import Directory from '../../component/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

export default HomePage;
