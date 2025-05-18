// Activity ranking components

import { format } from 'date-fns';
import type { DayForecast, ActivityRank } from '../../types';
import { rankDayActivities } from '../../helpers';
import { WaveIcon, SnowIcon, SunIcon, HouseIcon } from '../../icons';

interface ActivityRankingProps {
  dayForecast: DayForecast;
}

const showActivityIcon = (activity: string) => {
  switch (activity) {
    case 'surfing':
      return <WaveIcon />;
    case 'skiing':
      return <SnowIcon />;
    case 'outdoor_sightseeing':
      return <SunIcon />;
    case 'indoor_sightseeing':
      return <HouseIcon />;
  }
};

export const ActivityRanking = ({ dayForecast }: ActivityRankingProps) => {
  const { time } = dayForecast;
  const date = new Date(time);
  const formattedDate = format(date, 'do MMM');

  // Rank and sort day activities
  const sortedActivityRanks = rankDayActivities(dayForecast);

  return (
    <div className="border">
      <div className="bg-black p-5 text-white font-bold text-lg">{formattedDate}</div>
      <div className="p-5">
        {sortedActivityRanks.map(({ activity, score }: ActivityRank) => {
          return (
            <p key={`${activity}-${score}`} className="text-lg capitalize">
              {showActivityIcon(activity)}
              {activity.split('_').join(' ')}
            </p>
          );
        })}
      </div>
    </div>
  );
};
