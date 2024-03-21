import { Series } from "remotion";
import { Eighth, Eleventh, Ninth, Outro, Seventh, Sixth, Tenth, Twelveth } from "./scenes";

export const MyComposition: React.FC = ({

}) => {
	return (
		<>
			<Series>
				<Series.Sequence durationInFrames={8865}>
					<Sixth />
				</Series.Sequence>
				<Series.Sequence durationInFrames={4830}>
					<Seventh />
				</Series.Sequence>
				<Series.Sequence durationInFrames={10040}>
					<Eighth />
				</Series.Sequence>
				<Series.Sequence durationInFrames={9540}>
					<Ninth />
				</Series.Sequence>
				<Series.Sequence durationInFrames={6480}>
					<Tenth />
				</Series.Sequence>
				<Series.Sequence durationInFrames={7230}>
					<Eleventh />
				</Series.Sequence>
				<Series.Sequence durationInFrames={5250}>
					<Twelveth />
				</Series.Sequence>
				<Series.Sequence durationInFrames={200}>
					<Outro />
				</Series.Sequence>
			</Series>
		</>
	);
};